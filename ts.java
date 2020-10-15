import java.io.*;
import java.util.*;
class Add{
	public static void main(String arg[]){
	Scanner scan = new Scanner(System.in);
	int a,b,c;
	System.out.print("enter a and b to add");
	a=scan.nextInt();
	b=scan.nextInt();
	c=a+b;
	System.out.print("result="+c);
	}
}