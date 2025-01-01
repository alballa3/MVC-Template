
// Here Your Start You Routes
import { Router } from 'express';
import { Index } from '../controllers/controller.controller';

const router = Router();

// Home Route
router.get('/', Index);

export default router;