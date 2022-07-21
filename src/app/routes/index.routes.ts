import { Router } from 'express';

const router: Router = Router();

//insert your routes here

//for example:
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/', (req, res) => {
    res.status(200).json(req.body)
})


export default router