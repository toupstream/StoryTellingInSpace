var img, img2, img3, img4, img5;
var video, video2, video3, video4, video5;
var txt, txt2;
var txts = [];
var i = 0;
var m = true;

function setup() {
  canvas = createCanvas(0, 0);
  canvas.position(0, 0);
  canvas.style('z-index', '-5');
  img = createImg("Image/1.png");
  img3 = createImg("Image/3.png");
  img4 = createImg("Image/4.png");
  img5 = createImg("Image/5.png");
  img2 = createImg("Image/2.png");
  img6 = createImg("Image/6.png");
  img6.hide();
  txt = createDiv('');
  txt.style('color','white');
  txt.style('padding','10%');
  txt2 = createDiv('');
  txt2.style('color','white');
  txt2.style('padding','30%');
  video = createVideo('Video/1.mp4')
  video.play();
  video.loop();
  video.style('z-index', '-1');
  video.position(windowWidth * 0.6, windowHeight * 0.45);
  video.style('width', '550px');
  video2 = createVideo('Video/2.mp4')
  video2.style('z-index', '-3');
  video2.style('width', '800px');
  video2.position(0, 0);
  video2.play();
  video2.loop();
  video3 = createVideo('Video/3.mp4')
  video3.style('z-index', '-2');
  video3.style('width', '500px');
  video3.position(windowWidth * 0.3, windowHeight * 0.5);
  video3.play();
  video3.loop();
  video4 = createVideo('Video/7.mp4')
  video4.style('z-index', '-3');
  video4.style('width', '460px');
  video4.position(windowWidth * 0.5, windowHeight * 0.2);
  video4.play();
  video4.loop();
  video5 = createVideo('Video/6.mp4')
  video5.style('z-index', '-2');
  video5.style('width', '360px');
  video5.position(windowWidth * 0.05, windowHeight * 0.45);
  video5.play();
  video5.loop();
  video6 = createVideo('Video/8.mp4')
  video6.style('z-index', '-4');
  video6.style('width', '500px');
  video6.position(windowWidth * 0.55, -windowHeight * 0.1);
  video6.play();
  video6.loop();
  video7 = createVideo('Video/9.mp4')
  video7.style('z-index', '-2');
  video7.style('width', '350px');
  video7.position(windowWidth * 0.25, windowHeight * 0.2);
  video7.play();
  video7.loop();
  imageMode(CENTER);
}

function draw() {
  background(0);
  var w = canvas.width;
  var h = canvas.height;
  var x = mouseX * 0.2;
  var y = mouseY * 0.2;
  var q = sin(frameCount * 0.05);
  var q2 = sin(frameCount * 0.03);
  var q3 = sin(frameCount * 0.05 + 1);
  var q4 = sin(frameCount * 0.03 + 1);
  var q5 = sin(frameCount * 0.05 + 2);
  var q6 = sin(frameCount * 0.03 + 2);
  var q7 = sin(frameCount * 0.05 + 3);
  var q8 = sin(frameCount * 0.03 + 3);
  img.position(windowWidth * 0.11 + (q2 * 5), windowHeight * 0.28 + (q5 * 5));
  img2.position(windowWidth * 0.36 + (q4 * 5), windowHeight * 0.39 + (q2 * 5));
  img3.position(windowWidth * 0.41 + (q6 * 5), windowHeight * 0.34 + (q5 * 5));
  img4.position(windowWidth * 0.52 + (q8 * 5), windowHeight * 0.4 + (q3 * 5));
  img5.position(windowWidth * 0.61 + (q7 * 5), windowHeight * 0.3 + (q6 * 5));
  txt.position(windowWidth * 0.03 + (q3 * 5), windowHeight * 0.28 + (q2 * 5));
  txt2.position(windowWidth * 0.05 + (q3 * 5), windowHeight * 0.3 + (q2 * 5));
  img6.position(windowWidth * 0.2 + (q5 * 5), windowHeight * 0.335 + (q6 * 5));
  // img.position(windowWidth * 0.08 + (q2 * 5), windowHeight * 0.32 + (q3 * 5));
  // image(img, w*0.2+x, h*0.2-y, img.width*0.5, img.width*0.5);
  
  txts[1] = 'Well come to the interdimensional documentary Channel. Since we discover the whole new dimension no.D13E21, a lot of questions came out. People who live there always hidden in the dark tunnel. How many are they? How could they live? Today we gonna present a special interview to help us to understand more about the “mole people”.';
  txts[2] = 'Tell us about yourself.';
  txts[3] = 'I’m the B34T2 entrance connects the AQ876 and D13E21.';
  txts[4] = 'But you are just a graffiti.';
  txts[5] = 'Yes, that’s how it work.';
  txts[6] = 'How?';
  txts[7] = 'As a graffiti, I connect AQ876, the world you live, and D13E21, the similar alternative world in another dimension.';
  txts[8] = 'Well then. When do you became the “entrance”?';
  txts[9] = 'When I became the graffiti. More specifically, is the time when people think I’m a graffiti since I appeared.';
  txts[10] = 'Fine.';
  txts[11] = 'Gotta go. See u.';
  txts[12] = 'What?';
  txts[13] = 'B34T2 has quit.';
  txts[14] = 'Alright. Welcome our next guest.';
  txts[15] = '';
  txts[16] = 'Tell us about you.';
  txts[17] = 'I’m the P23D1 entrance.';
  txts[18] = 'You have a cut in your right corner. What was happened?';
  txts[19] = 'Well. It was a fight between two guys. They noticed the drug on me at the same time. It was, Uhhh. Yeh. Pretty much.';
  txts[20] = 'On you? Why do you have drug?';
  txts[21] = 'As an entrance, we occasionally obtain some random things from AQ876, the world you live. People here pick them for living.';
  txts[22] = 'What are they? How much? ';
  txts[23] = 'The people? They are just normal people. The population is base on the amount of the things we got. People die or born to match it.';
  txts[24] = 'Wow. But, I was talked about the things. What is it? The thing you gain occasionally.';
  txts[25] = 'Oh usually it’s trash. Sometimes foods. In some cases, drugs, which is the most popular one.';
  txts[26] = 'So they have to fight for living, right?';
  txts[27] = 'Not necessary. They’re always quiet and alone. They’re only aggressive and loud after getting high. Instead of fight for living, you can just lower the living requirement. Like they did.';
  txts[28] = 'Fine. You said they were quiet and alone. Dose that mean they live by their own, without connected to each other?';
  txts[29] = 'Not exactly. They share some common space where they can read, smoke or watch TV. The rules is simple but strictly enforced. No yelling, No stealing, No stupid behavior or you’d be kicked out.';
  txts[30] = 'Impressive. By the way, are you talking about the mole people who live in abandoned tunnels in New York?';
  txts[31] = 'No, I’m talking about people live in D13E21.';
  txts[32] = 'Thank you.';
  if(mouseIsPressed&m){
    i++;
    currentTxt = txts[i];
    if(i%2==1){
    txt.html(currentTxt);
    }else{
    txt2.html(currentTxt);
    }
    if(i==13){
      img.hide();
      img2.hide();
      img3.hide();
      img4.hide();
      img5.hide();
    }
    if(i==15){
      img6.show();
    }
    print(i);
    m = false;
  }
  if(!mouseIsPressed){
    m = true;
  }
}
