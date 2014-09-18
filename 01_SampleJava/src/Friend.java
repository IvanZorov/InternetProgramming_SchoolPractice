public class Friend {
	String name;
	int age;
	String nation;
	
	public boolean equals(Object obj) {
		if (!(obj instanceof Friend)) {
			return false;
		}
		Friend that = (Friend) obj;
		return this.name.equals(that.name);
	}	

	public Friend(String name){
		this.name = name;
	}
 
	public void friendAge(int friendAge){
		age = friendAge;
	}
 
	public void friendNation(String frNat){
		nation = frNat;
	}
 
	public void printFriend(){
		System.out.println("Name:"+ name );
		System.out.println("Age:" + age );
		System.out.println("Nation:" + nation );
	}
}
