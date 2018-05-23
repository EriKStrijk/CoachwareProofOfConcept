export default class BHSoundHandling {
    constructor(data) {

       this.data = data;
       this.maakDrill();

    }
    maakDrill() {
        this.drill = [];
        this.index = 0;
        const opdracht = this.data[Math.random() * (this.data.length - 1)];
        const tijd = opdracht.tijden[Math.floor(Math.random() * (opdracht.tijden.length))];
        this.tijd = tijd.Seconden;
        
        this.drill.push(opdracht.opdrachten[Math.floor(Math.random() * (opdracht.opdrachten.length))]);
        this.drill.push(opdracht.tijden[Math.floor(Math.random() * (opdracht.tijden.length))].MP3);
    }

    async play() {
        this.soundObject = new Expo.Audio.Sound();


        var mp3 = this.drill[this.index];

        await this.soundObject.loadAsync(mp3);
        await this.soundObject.playAsync();

        this.soundObject.setOnPlaybackStatusUpdate(this.onPlayBack.bind(this));

        this.index++;
    }
    async stop() {
      await this.soundObject.stopAsync()
    }
    async stopDestroy() {

        await this.soundObject.stopAsync();
        this.soundObject = null;        
        this.drill = [];
        this.index = 0;
    }
    onPlayBack(status)
    {

        if(!status.didJustFinish) return;
        if(this.index != this.drill.length) {
            this.play();
        }
        else {
            this.maakDrill();
            setTimeout(() => {

                this.play();
            }, this.tijd * 1000);
        }

    }
}