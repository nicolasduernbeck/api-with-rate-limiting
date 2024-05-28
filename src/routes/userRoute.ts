import { Router } from 'express';

const router = Router();
router.route('/').get().post().delete().put();

export default router;
