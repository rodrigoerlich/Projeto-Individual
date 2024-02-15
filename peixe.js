var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
         preload: preload,
         create: create, 
         update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {                                      
    this.load.image('mar', 'assets/mar1.png')
 
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image('peixe', 'assets/peixe_serio.png');

    this.load.image('crustaceo', 'assets/crustaceo.png');

}

    function create() {

    this.add.image(400, 300, 'mar').setScale(2);

    this.add.image(400, 525, 'logo').setScale(0.5);

    this.add.image(450, 300, 'crustaceo');
    peixinho = this.add.image(400, 300, 'peixe');


    peixinho.setFlip(true, false);
}       

function update() {

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}



