import {Router} from 'express';
import multer from 'multer';
import AdminController from './admin.controller';
import authenticateByToken from '../../middleware/authenticateByToken';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/audio')
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
})


const upload = multer({storage: storage});

const adminRouter = Router();

adminRouter.route('/categories')
  .get(authenticateByToken, AdminController.getCategories)
  .patch(authenticateByToken, AdminController.editCategory)
  .post(authenticateByToken, AdminController.addCategory)
  .delete(authenticateByToken, AdminController.deleteCategory);

adminRouter.route('/words')
  .patch(authenticateByToken, AdminController.editWord)
  .post(authenticateByToken, AdminController.addWord)
  .delete(authenticateByToken, AdminController.deleteWord);

adminRouter.route('/words/audio')
  .post(authenticateByToken, upload.single('audioFile'), AdminController.saveAudio);
export default adminRouter;