package org.workshop.rxjava.step2.filter;

public class Car {
    private long price;
    private double weight;
    private String name;

    public Car(long price, double weight, String name) {
        this.price = price;
        this.weight = weight;
        this.name = name;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
