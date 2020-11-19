// JavaScript Document
myD       = new Date();
myYear    = myD.getYear();
myYear4   = (myYear < 2000) ? myYear+1900 : myYear;
document.write( myYear4 );
