class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        String[] name = {"kim","sally","john","james","kendra","Kesh","france","fern","nicole","lara"};
        String[] gender = {"female","female","male","male","female","female","male","male","female","female"};
        int[] age = {13,25,25,16,17,30,23,14,15,70};
        String[] mt = {"single","married","married","single","single","married","single","single","single","married"};
        TwoDArray test = new TwoDArray(name, gender, age, mt);
        
        String sally = test.getPerson("sally");
        System.out.println(sally);
        
        String boys = test.getByGender("male");
        System.out.println("boys: " + boys);
        
        String girls = test.getByGender("female");
        System.out.println("girls:" + girls);
        
        String adults = test.getAdults();
        System.out.println("adults:" + adults);
        
        String youngs = test.getYoungsters();
        System.out.println("young:"+youngs);
        
        String seniors = test.getSeniors();
        System.out.println("Seniors:"+seniors);
        
        String adultsBoys = test.getAdultsGender("male");
        System.out.println("Boys adult:"+adultsBoys);
        
        String adultsGirls = test.getAdultsGender("female");
        System.out.println("girls adult:"+adultsGirls);
    }
}


class TwoDArray {
    private String[] name;
    private String[] gender;
    private int[] age;
    private String[] maritalStatus;
    
    public TwoDArray (String[] name, String[] gender, 
                        int[] age,String[] maritalStatus){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.maritalStatus = maritalStatus;
    }
    
    public String getPerson(String name){
        int index = 20;
        int len = this.name.length;
        
        for (int i = 0; i < len; i++){
            if(this.name[i] == name){
                index = i;
            }
        }
        
        if(index == 20){
            return "Not Found";
        }
        
        return String.format("name: %s, gender: %s, age: %d ,Marital Status: %s", this.name[index], this.gender[index], this.age[index], this.maritalStatus[index]);
    }
    
    public String getByGender(String gender) {
        String names = "";
        int len = this.gender.length;
        for (int i =0; i<len; i++){
            if(this.gender[i] == gender){
                names += "," + this.name[i];
            }
        }
        return names.substring(1, names.length());
    }
    
    public String getAdults() {
        String adults = "";
        int len = this.age.length;
        for (int i =0; i<len; i++){
            if(this.age[i] >= 18 && this.age[i] <= 59){
                // adults.add(this.name[i]);
                adults += "," + this.name[i];
            }
        }
        return adults.substring(1, adults.length());
    }
    
    public String getYoungsters() {
        String youngs = "";
        int len = this.age.length;
        for (int i =0; i<len; i++){
            if(this.age[i] < 18){
                youngs += ","+this.name[i];
            }
        }
        return youngs.substring(1, youngs.length());
    }
    
    public String getSeniors() {
        String sens = "";
        int len = this.age.length;
        for (int i =0; i<len; i++){
            if(this.age[i] > 59){
                sens += ","+ this.name[i];
            }
        }
        return sens.substring(1, sens.length());
    }
    
    public String getAdultsGender(String gender) {
        String adults = "";
        int len = this.age.length;
        for (int i =0; i<len; i++){
            if(this.age[i] >= 18 && this.age[i] <= 59 && this.gender[i]== gender){
                adults += "," +this.name[i];
            }
        }
        return adults.substring(1, adults.length());
    }
    
}