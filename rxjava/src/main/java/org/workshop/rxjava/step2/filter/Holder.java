package org.workshop.rxjava.step2.filter;

import java.util.*;

public class Holder {

    private List<Owner> list = new ArrayList<>();

    public Holder() {
        Car car1 = new Car(2000, 20, "bmw");
        Owner owner1 = new Owner("Owner1", 123, car1);

        Car car2 = new Car(20000, 40, "merc");
        Owner owner2 = new Owner("Owner2", 50, car2);

        Car car3 = new Car(7874, 500, "sdf");
        Owner owner3 = new Owner("Owner3", 1278, car3);

        Car car4 = new Car(767823, 65435, "sdf");
        Owner owner4 = new Owner("Owner4", 50, car4);

        Car car5 = new Car(767823, 435, "sdfsdf");
        Owner owner5 = new Owner("Owner6", 150, car4);

        list.add(owner1);
        list.add(owner2);
        list.add(owner3);
        list.add(owner4);
        list.add(owner5);
    }

    public List<Owner> getList() {
        return list;
    }
}
