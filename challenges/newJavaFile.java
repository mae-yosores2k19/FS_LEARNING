
import java.util.ArrayList;

class HelloWorld {

    public static void main(String[] args) {
        System.out.println("Hello, World!");
        String[] name = {"kim", "sally", "john", "james", "kendra", "Kesh", "france", "fern", "nicole", "lara"};
        String[] gender = {"female", "female", "male", "male", "female", "female", "male", "male", "female", "female"};
        int[] age = {13, 25, 25, 16, 17, 30, 23, 14, 15, 70};
        String[] mt = {"single", "married", "married", "single", "single", "married", "single", "single", "single", "married"};
        TwoDArray test = new TwoDArray(name, gender, age, mt);

        String sally = test.getPerson("sally");
        System.out.println(sally);

        ArrayList<String> boys = test.getByGender("male");
        System.out.println("boys: " + boys.toString());

        ArrayList<String> girls = test.getByGender("female");
        System.out.println("girls:" + girls.toString());

        ArrayList<String> adults = test.getAdults();
        System.out.println("adults:" + adults.toString());

        ArrayList<String> youngs = test.getYoungsters();
        System.out.println("young:" + youngs.toString());

        ArrayList<String> seniors = test.getSeniors();
        System.out.println("Seniors:" + seniors.toString());

        ArrayList<String> adultsBoys = test.getAdultsGender("male");
        System.out.println("Boys adult:" + adultsBoys.toString());

        ArrayList<String> adultsGirls = test.getAdultsGender("female");
        System.out.println("girls adult:" + adultsGirls.toString());
    }
}

class TwoDArray {

    private String[] name;
    private String[] gender;
    private int[] age;
    private String[] maritalStatus;

    public TwoDArray(String[] name, String[] gender,
            int[] age, String[] maritalStatus) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.maritalStatus = maritalStatus;
    }

    public String getPerson(String name) {
        int index = 20;
        int len = this.name.length;

        for (int i = 0; i < len; i++) {
            if (this.name[i] == name) {
                index = i;
            }
        }

        if (index == 20) {
            return "Not Found";
        }

        return String.format("name: %s, gender: %s, age: %d ,Marital Status: %s", this.name[index], this.gender[index], this.age[index], this.maritalStatus[index]);
    }

    public ArrayList<String> getByGender(String gender) {
        ArrayList<String> names = new ArrayList<String>();
        int len = this.gender.length;
        for (int i = 0; i < len; i++) {
            if (this.gender[i] == gender) {
                names.add(this.name[i]);
            }
        }
        return names;
    }

    public ArrayList<String> getAdults() {
        ArrayList<String> adults = new ArrayList<String>();
        int len = this.age.length;
        for (int i = 0; i < len; i++) {
            if (this.age[i] >= 18 && this.age[i] <= 59) {
                adults.add(this.name[i]);
            }
        }
        return adults;
    }

    public ArrayList<String> getYoungsters() {
        ArrayList<String> youngs = new ArrayList<String>();
        int len = this.age.length;
        for (int i = 0; i < len; i++) {
            if (this.age[i] < 18) {
                youngs.add(this.name[i]);
            }
        }
        return youngs;
    }

    public ArrayList<String> getSeniors() {
        ArrayList<String> sens = new ArrayList<String>();
        int len = this.age.length;
        for (int i = 0; i < len; i++) {
            if (this.age[i] > 59) {
                sens.add(this.name[i]);
            }
        }
        return sens;
    }

    public ArrayList<String> getAdultsGender(String gender) {
        ArrayList<String> adults = new ArrayList<String>();
        int len = this.age.length;
        for (int i = 0; i < len; i++) {
            if (this.age[i] >= 18 && this.age[i] <= 59 && this.gender[i] == gender) {
                adults.add(this.name[i]);
            }
        }
        return adults;
    }

}
