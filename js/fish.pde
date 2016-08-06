



  Fish stripeFish;
  
  
  int topBottomBorder = 0;
  int leftRightBorder = 0;

  
  int vineOffset = 0;
  boolean vineLeft = false;
  
  
  public void setup () {
 
jProcessingJS(this);

   // smooth();
    
    stripeFish = new Fish(width/2, height/2);
    

    
  }
  
  public void draw() {
    
    background(255);
    
    drawPond();
    
        stripeFish.drawFish();
        stripeFish.update();
    

  }
  
  // draws the pond
  public void drawPond() {
    
    
    pushMatrix();
    translate(leftRightBorder/2, topBottomBorder/2);
  
    noStroke();
    fill(35, 174, 194);
    rect(0, 0, width, height);
    
    //draws vines that sway back and forth
    if (frameCount % 5 == 0 && vineLeft == true) {
        vineOffset += 1;
       }
         else if (frameCount % 5 == 0) {  
           vineOffset -= 1;  
        }
    
    // reverses whether the vine is moving left or back to 0
        if (vineLeft == true && vineOffset == 0) {
          vineLeft = false;
        } else if (vineLeft == false && vineOffset == -15){
          vineLeft = true;
        }
        
    fill(50, 235, 115);
    // left vine
    beginShape();
    curveVertex(((width/3)*2)-5-20, height);
    curveVertex(((width/3)*2)-5-20, height);
    curveVertex(((width/3)*2)-5-20+vineOffset, height-300);
    curveVertex(((width/3)*2)+5-20, height);
    curveVertex(((width/3)*2)+5-20, height);
    endShape();
    
    // centre vine
    beginShape();
    curveVertex(((width/3)*2)-5, height);
    curveVertex(((width/3)*2)-5, height);
    curveVertex(((width/3)*2)-5+vineOffset, height-480);
    curveVertex(((width/3)*2)+5, height);
    curveVertex(((width/3)*2)+5, height);
    endShape();
    
    // right vine
    beginShape();
    curveVertex(((width/3)*2)-5+20, height);
    curveVertex(((width/3)*2)-5+20, height);
    curveVertex(((width/3)*2)-5+35+vineOffset, height-400);
    curveVertex(((width/3)*2)+5+20, height);
    curveVertex(((width/3)*2)+5+20, height);
    endShape();
  
    // rock
    //fill(152, 152, 152);
    //beginShape();
    //curveVertex(((width/3)*2)-3, height-15);
    //curveVertex(((width/3)*2)-3, height-15);
    //curveVertex(((width/3)*2)-8, height-45);
    //curveVertex(((width/3)*2)-11, height-55);
    //curveVertex(((width/3)*2)-3, height-70);
    //curveVertex(((width/3)*2)+22, height-65);
    //curveVertex(((width/3)*2)+47, height-60);
    //curveVertex(((width/3)*2)+45, height-35);
    //curveVertex(((width/3)*2)+42, height-25);
    //endShape();
    
    //draws the ground
    //fill(235, 225, 120);
    //beginShape();
    //curveVertex(0-20, height);
    //curveVertex(0-20, height);
    //curveVertex(0, random(height-40, height-90));
    //curveVertex(width/5, random(height-40, height-90));
    //curveVertex((width/5)*2, random(height-40, height-90));
    //curveVertex((width/5)*3, random(height-40, height-90));
    //curveVertex((width/5)*4, random(height-40, height-90));
    //curveVertex(width, random(height-40, height-90));
    //curveVertex(width+20, height);
    //curveVertex(width+20, height);
    //endShape();
    popMatrix();
    
  }
  
  public class Fish {
    
    int xPos;
    int yPos;
    float xVel = 2;
    
    float bob = 0;
    int bobToggle = 1;
    
    int flip = 1;
    float rotationDegrees = 1;
    boolean mouthOpening = true;
    
    int finTip = 0;
    boolean finRight = true;
    
    
    public Fish(int xPos, int yPos) {
      this.xPos = xPos;
            this.yPos = yPos;
            xVel = 2;
    }
    

    
    // draws the fish
    public void drawFish() {
      
      
      translate(xPos, yPos+bob);
      
      
      // flips the visual of the fish
      if (flip == -1) {
        rotate(PI);
            scale(1, -1);
          } 
          
          scale(1.2);
      
      // bottom of mouth
      pushMatrix();
      translate(33, 15);
      rotate(radians(rotationDegrees));
      noStroke();
      fill(255);
      beginShape();
      curveVertex(67-33, 15-15);
      curveVertex(67-33, 15-15);
      curveVertex(60-33, 31-15);
      curveVertex(70-33, 27-15);
      curveVertex(78-33, 22-15);
      curveVertex(86-33, 18-15);
      curveVertex(94-33, 16-15);
      curveVertex(100-33, 16-15);
      curveVertex(104-33, 15-15);
      curveVertex(105-33, 12-15);
      curveVertex(67-33, 15-15);
      curveVertex(67-33, 15-15);
      endShape();
      popMatrix();
      
      
      // top of mouth
      beginShape();
      curveVertex(52, -30);
      curveVertex(52, -30);
      curveVertex(65, -5);
      curveVertex(67, 15);
      curveVertex(60, 31);
      curveVertex(72, 20);
      curveVertex(84, 14);
      curveVertex(105, 10);
      curveVertex(104, 8);
      curveVertex(102, 7);
      curveVertex(94, 7);
      curveVertex(80, 3);
      curveVertex(70, -5);
      curveVertex(52, -30);
      curveVertex(52, -30);
      endShape();
      
      // fish's color
      fill(255, 155, 30);
      
      // left body fin
      pushMatrix();
      rotate(radians(rotationDegrees));
      beginShape();
      curveVertex(21, 43);
      curveVertex(21, 43);
      curveVertex(15, 51);
      curveVertex(12, 59);
      curveVertex(5, 69);
      curveVertex(-1, 86);
      curveVertex(9, 74);
      curveVertex(20, 64);
      curveVertex(42, 44);
      curveVertex(21, 41);
      curveVertex(21, 41);
      endShape();
      popMatrix();
      
      
      // right body fin
      pushMatrix();
      rotate(-radians(rotationDegrees));
      beginShape();
      curveVertex(22, 36);
      curveVertex(22, 36);
      curveVertex(21, 46);
      curveVertex(20, 56);
      curveVertex(21, 66);
      curveVertex(22, 76);
      curveVertex(20, 84);
      curveVertex(26, 78);
      curveVertex(34, 71);
      curveVertex(38, 68);
      curveVertex(42, 62);
      curveVertex(44, 54);
      curveVertex(43, 43);
      curveVertex(42, 36);
      curveVertex(22, 36);
      curveVertex(22, 36);
      endShape();
      popMatrix();
      
      // tail fin
      beginShape();
      curveVertex(-50, 8);
      curveVertex(-50, 8);
      curveVertex(-64, 11);
      // fin's moving tip
      curveVertex(-90+(finTip*2), -10);
      curveVertex(-97+(finTip*5), 27);
      curveVertex(-80+(finTip*2), 55);
      //
      curveVertex(-61, 29);
      curveVertex(-47, 26);
      curveVertex(-50, 8);
      curveVertex(-50, 8);
      endShape();
      
      
      // yellow body
        beginShape();
        curveVertex(0, -60);
        curveVertex(0, -60);
        curveVertex(20, -54);
        curveVertex(45, -40);
        curveVertex(65, -5);
        curveVertex(67, 15);
        curveVertex(60, 31);
        curveVertex(50, 40);
        curveVertex(40, 45);
        curveVertex(20, 49);
        curveVertex(0, 54);
        curveVertex(-10, 65);
        curveVertex(-12, 67);
        curveVertex(-20, 73);
        curveVertex(-30, 79);
        curveVertex(-40, 82);
        curveVertex(-50, 83);
        curveVertex(-60, 79);
        curveVertex(-64, 68);
        curveVertex(-63, 46);
        curveVertex(-62, 40);
        curveVertex(-60, 34);
        curveVertex(-55, 30);
        curveVertex(-59, 10);
        curveVertex(-64, 8);
        curveVertex(-67, 4);
        curveVertex(-72, -10);
        curveVertex(-74, -20);
        curveVertex(-77, -30);
        curveVertex(-78, -38);
        curveVertex(-76, -44);
        curveVertex(-68, -50);
        curveVertex(-58, -54);
        curveVertex(-30, -60);
        curveVertex(0, -60);
        curveVertex(0, -60);
        endShape();
        
        // rear body spot
        fill(0);
        ellipse(-41, -32, 11, 12);
        
        // white stripe 1
        fill(255);
        noStroke();
        beginShape(); 
        curveVertex(-56, -28);
        curveVertex(-56, -28);
        curveVertex(-58, 0);
        curveVertex(-54, 8);
        curveVertex(-54, 26);
        curveVertex(-36, 64);
        curveVertex(-45, 20);
        curveVertex(-48, -12);
        curveVertex(-48, -12);
        endShape();
        
        // white stripe 2
        beginShape();
        curveVertex(-19, -55);
        curveVertex(-19, -55);
        curveVertex(-32, -48);
        curveVertex(-26, -36);
        curveVertex(-30, 0);
        curveVertex(-30, 20);
        curveVertex(-26, 40);
        curveVertex(-12, 67);
        curveVertex(-10, 64);
        curveVertex(4, 46);
        curveVertex(-2, -15);
        curveVertex(-5, -43);
        curveVertex(-19, -55);
        curveVertex(-19, -55);
        endShape();
        
        // white stripe 3
        beginShape();
        curveVertex(0, -56);
        curveVertex(0, -56);
        curveVertex(26, -46);
        curveVertex(36, 0);
        curveVertex(37, 20);
        curveVertex(38, 45);
        curveVertex(20, 49);
        curveVertex(9, 51);
        curveVertex(15, 37);
        curveVertex(11, 0);
        curveVertex(10, -40);
        curveVertex(7, -48);
        curveVertex(0, -56);
        curveVertex(0, -56);
        endShape();
        
        // white stripe 4
        beginShape();
        curveVertex(33, -45);
        curveVertex(33, -45);
        curveVertex(46, -38);
        curveVertex(50, -28);
        curveVertex(54, -15);
        curveVertex(58, -4);
        curveVertex(62, 16);
        curveVertex(60, 31);
        curveVertex(50, 40);
        curveVertex(40, 45);
        curveVertex(47, 20);
        curveVertex(48, 0);
        curveVertex(33, -45);
        curveVertex(33, -45);
        endShape();
      
        // eye
        fill(0);
        ellipse(63, 0, 7, 7);
      
    }
    
    public void update() {
      
          xPos += xVel;
          
          
          // makes the fish bob up and down
          if (bobToggle == 1) {
            
            bob += 0.3;
            
          } else {
            
            bob -= 0.3;
            
          }
          
          // switches the direction the fish is bobbing
          if (bob >= 100 || bob <= -100){
            
            bobToggle *= -1;
            
          }
          
          // edge detection to turn the fish around
          if (xPos >= width+300 || xPos <= leftRightBorder-300) {
            
            xVel = -xVel;
            flip = flip * -1;
            
          }
          
      // makes the fish open his mouth and move body fins
      if (frameCount % 5 == 0 && mouthOpening == true) {
          
          
          rotationDegrees += 0.25;
          
         }
           else if (frameCount % 5 == 0) {
            
             rotationDegrees -= 0.25;
            
          }
          
      // reverses whether the mouth is opening or closing
          if (mouthOpening == true && rotationDegrees == 4) {
            mouthOpening = false;
          } else if (mouthOpening == false && rotationDegrees == 0){
            mouthOpening = true;
          }
          
          // moves the tip of the fin
      if (frameCount % 5 == 0 && finRight == true) {
          
          
          finTip += 1;
          
         }
           else if (frameCount % 5 == 0) {
            
             finTip -= 1;
            
          }
      
      // reverses whether the fin is moving left or right
          if (finRight == true && finTip == 1) {
            finRight = false;
          } else if (finRight == false && finTip == -1){
            finRight = true;
          }
    
    
  }
  
  
  }
  

  