package org.workshop.rxjava.step2.filter;

public class Owner {

    private String name;
    private Car car;
    private long money;

    public Owner(String name, long money, Car car) {
        this.name = name;
        this.money = money;
        this.car = car;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getMoney() {
        return money;
    }

    public void setMoney(long money) {
        this.money = money;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }
}
