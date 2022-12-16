// var x = prompt("Enter a string:")
//
// var c =0;
// for(i=0;i<x.length;i++)
//  {
//    if(x[i] != "a" && x[i]!= "e" && x[i] != "i" && x[i] != "o" && x[i] != "u" )
//    {
// 	   document.write(x[i]);
// 	   c++;
//    }
//  }
 
 // function vovel(b){
 //   a=prompt("enter the word")
 //   console.log(a.length)
 //   a=b;
 //   c=0
 //   for(i=0;i<a.length;i++){
 //   	if(a[i]=='a' || a[i]=='e' || a[i]=='i'  || a[i]=='o'  || a[i]=='u'){
 //   		c+=1
 //   }}
 //   return c
 //   }
 //
 //   z=prompt("enter the first string")  
 //   v=prompt("enter the second string")   
 //   if(vovel(z)>vovel(v))
 //   {
 //   	console.log(z)
 //   }
 //   else if(vovel(z)<vovel(v)){
 //   	console.log(v)
 //   }
 //   else{
 //   	console.log("two string are same")
 //   }
 //   console.log



var x="kavyaaa"
var y="kannan"
 c=0;
 t=0;
 for(i=0;i<x.length;i++)
 {
   if(x[i]=="a"|| x[i]=="e" || x[i]=="i"||x[i]=="o"||x[i]=="u" ) 
   {
     c++;
   }
 }
 for(i=0;i<y.length;i++)
 {
  if(y[i]=="a"|| y[i]=="e" || y[i]=="i"||y[i]=="o"||y[i]=="u" ) 
   {
     t++;
   }
 }
   if(c>t)
   {
	   console.log(c);
   }
  else
  {
	  console.log(t);
  }




















 