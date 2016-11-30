// variables defining the state of four pins

int eStat, nStat, tStat, eleStat;
eStat = 0; // 8
nStat = 0; // 9
tStat = 0; // 10
eleStat = 0; // 11

void setup()
{
  // Serial Begin at 9600 baud rate
  Serial.begin(9600);

  // Setting the pin mode of pins 8,9,10,11 as output
  pinMode(8,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(11,OUTPUT);
  digitalWrite(8,eStat);
  digitalWrite(9,nStat);
  digitalWrite(10,tStat);
  digitalWrite(11,eleStat);

}

void loop()
{

  // Seeing if Serial is available

  while(Serial.available()){

    // Looking for a integer value
    int controls = Serial.parseInt();

    // Switching the variable

    switch(controls)
    {
    /*

      If the Serial read is found to be 8, 9, 10 or 11 it will set the state of pins to the opposite

    */

    case 8:
      digitalWrite(8,!eStat);
      eStat = !eStat;

    case 9:
      digitalWrite(9,!nStat);
      nStat = !nStat;

    case 10:
      digitalWrite(10,!tStat);
      tStat = !tStat;

    case 11:
      digitalWrite(11,!eleStat);
      eleStat = !eleStat;
    }
  }
}
