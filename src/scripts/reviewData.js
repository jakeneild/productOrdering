const names = require("./names");

var firstArray = [];
var lastArray = [];

firstArray = names.first.split("\n")

for(let i = 0; i < firstArray.length; i++){
    let a = firstArray[i].search(",");
    firstArray[i] = firstArray[i].slice(0, a);
}

lastArray = names.last.split("\n");

for(let i = 0; i < lastArray.length; i++){
    let a = lastArray[i].slice(0, 1);
    let b = lastArray[i].slice(1, lastArray[i].length).toLowerCase();
    lastArray[i] = a + b;
}

const reviewString = "Lorem ipsum dolor amet pickled XOXO viral vegan food truck woke church-key. Portland iPhone copper mug, hell of cronut small batch VHS actually. Bitters cold-pressed coloring book, beard prism gochujang thundercats green juice. Roof party XOXO humblebrag small batch, tattooed activated charcoal godard vexillologist succulents wolf man braid mlkshk bushwick. Mlkshk scenester pinterest intelligentsia. Beard +1 photo booth, freegan poke pop-up readymade vexillologist brunch lumbersexual. Heirloom messenger bag poutine disrupt tattooed adaptogen portland wolf ethical letterpress blog freegan authentic butcher art party. Letterpress crucifix trust fund, schlitz man bun keytar slow-carb everyday carry you probably haven't heard of them ramps fingerstache pinterest activated charcoal poke retro. Health goth typewriter meditation before they sold out freegan enamel pin wayfarers biodiesel small batch snackwave mumblecore vinyl palo santo. Normcore schlitz williamsburg marfa 8-bit glossier. Irony distillery gochujang, sriracha intelligentsia try-hard whatever before they sold out slow-carb man bun cliche humblebrag celiac. Hell of pinterest squid waistcoat keytar. Truffaut echo park ethical tousled vice hoodie. Schlitz meh four loko shaman paleo cardigan banjo pork belly pop-up. Offal poutine cardigan, jean shorts PBR&B tattooed sustainable letterpress twee photo booth blue bottle artisan schlitz. Fixie disrupt bespoke, poutine synth portland readymade. Cardigan vinyl austin fanny pack mumblecore. Raw denim echo park hoodie health goth pok pok bitters pitchfork YOLO cloud bread. Cliche iPhone hoodie 3 wolf moon, lumbersexual vinyl yr vice actually chambray raclette pinterest small batch tattooed hashtag. Church-key chambray iPhone offal sartorial lo-fi poke vinyl raw denim drinking vinegar typewriter single-origin coffee. Put a bird on it chartreuse swag retro, wayfarers migas pop-up biodiesel meggings hexagon butcher iPhone. Meggings raclette yr farm-to-table artisan palo santo.  DIY man braid snackwave helvetica cliche flannel fam church-key mlkshk woke shaman. Sustainable blue bottle cardigan, shaman letterpress pork belly craft beer ethical authentic selvage narwhal helvetica fashion axe you probably haven't heard of them cloud bread. Palo santo kogi venmo listicle pinterest artisan semiotics, DIY organic. Leggings viral ramps humblebrag unicorn 3 wolf moon kale chips try-hard synth etsy jean shorts pabst cray next level intelligentsia.";

const reviewData = function(){
    let reviewArray = reviewString.split(" ");

    for(let i = 0; i < reviewArray.length; i++){
        reviewArray[i] = reviewArray[i].toLowerCase();
    }

    let newReview = "";
    let newReviewArray = [];

    for(let i = 0; i < 175; i++){
        let wordNum = Math.floor(Math.random() * (reviewArray.length + 1));
        newReview += reviewArray[wordNum] + " ";
    }

    console.log(newReview);

    let a = newReview.charAt(0);
    a = a.toUpperCase();

    newReview = newReview.slice(1, newReview.length);
    newReview = a + newReview;

    for(let i = 0; i < newReview.length; i++){
        if (newReview.charAt(i) === "." && (i+2) < newReview.length){
            let b = newReview.split("");
            b[i+2] = b[i+2].toUpperCase();
            newReview = b.join("");
        }
    }
    let b = newReview.split("");
    b[b.length-1] = "."
    newReview = b.join("");

    console.log(newReview)

    let myObj = {};

    myObj.review = newReview;

    let randFirst = firstArray[Math.floor(Math.random() * (firstArray.length + 1))];
    let randLast = lastArray[Math.floor(Math.random() * (lastArray.length + 1))];
    let randFull = randFirst + " " + randLast;

    myObj.name = randFull;

    return myObj;
}

reviewData();

module.exports = reviewData;