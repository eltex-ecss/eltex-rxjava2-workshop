package org.workshop.rxjava.step2.filter;

import io.reactivex.Observable;

public class FilterTaskSolution {

    public static void main(String[] args) {
        Observable
                .fromIterable(new Holder().getList())
                .filter(it -> it.getCar().getWeight() > 400 && it.getMoney() > 100)
                .subscribe(s -> {
                    System.out.println(s.getName());
                }, Throwable::printStackTrace);
    }
}
