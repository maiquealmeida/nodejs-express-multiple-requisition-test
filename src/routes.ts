import express, { Application } from 'express';
const router = express.Router();
import { delay } from './helpers/delay'
import Timer from './helpers/timer';


router.get('/', async (req, res) => {
    res.status(200).send('Hello World!');
});

router.post('/heavy', async function (req, res) {
    const timer = new Timer();
    await delay(35000)
    timer.end();

    res.status(200).send({
        message: "Heavy delay (35s)",
        elapsedTime: timer.elapsedTimeInSeconds
    });
});

router.post('/medium', async function (req, res) {
    const timer = new Timer();
    await delay(10000)
    timer.end();

    res.status(200).send({
        message: "Medium delay (10s)",
        elapsedTime: timer.elapsedTimeInSeconds
    });
});

router.post('/light', async function (req, res) {
    const timer = new Timer();
    await delay(2000)
    timer.end();

    res.status(200).send({
        message: "Light elay (2s)",
        elapsedTime: timer.elapsedTimeInSeconds
    });
});

router.post('/soft', async function (req, res) {
    const timer = new Timer();
    timer.end();

    res.status(200).send({
        message: "Soft delay (no-delay)",
        elapsedTime: timer.elapsedTimeInSeconds
    });
});


export default router;