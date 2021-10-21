export default class Timer {
    private _startTime;
    private _endTime;
    private _elapsedTime;


    constructor(){
        this.start();
    }

    public start(): void {
        this._startTime = Date.now();
    }

    public end(): void {
        this._endTime = Date.now();
        this._elapsedTime = this._endTime - this._startTime;
    }

    public get elapsedTime(): number {
        return this._elapsedTime;
    }

    public get startTime(): number {
        return this._startTime;
    }
    
    public get endTime(): number {
        return this._endTime;
    }

    public get elapsedTimeInSeconds(): number {
        return this._elapsedTime / 1000;
    }

    public get elapsedTimeInMinutes(): number {
        return this.elapsedTimeInSeconds / 60;
    }
}