public class Main {
	private static Friend friendOne;
	private static Friend friendTwo;

	public static void main(String args[]) {
		
		for(int a = 3; a<6; a = a + 1) {
			System.out.print("value of a: " + a);
			System.out.print("\n");
		}
		System.out.print("\n");
		
		
		friendOne = new Friend("Ivan Zorov");
		friendTwo = new Friend("Emil Dudev");
		
	      friendOne.friendAge(18);
	      friendOne.friendNation("Bulgaria");
	      friendOne.printFriend();
	      System.out.print("\n");

	      friendTwo.friendAge(17);
	      friendTwo.friendNation("Bulgaria");
	      friendTwo.printFriend();
	      System.out.print("\n");
	
	  	if (friendOne.equals(friendTwo) ){
	  		System.out.print("Te sa ada6i" + "\n");
	  	} else {
	  		System.out.print("Te imat razli4ni imena" + "\n");
	  	}
	}
}
