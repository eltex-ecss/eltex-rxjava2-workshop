package org.workshop.rxjava.step1;

import io.reactivex.Flowable;

public class HelloWorldSolution {


    public static void main(String[] args) {
        Flowable.just("Hello world").subscribe(System.out::println);
    }
}
