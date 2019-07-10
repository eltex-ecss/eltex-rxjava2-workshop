package org.workshop.rxjava.step5;

import io.reactivex.Observable;

public class ScanSolution {


    public static void main(String[] args) {
        Observable.fromArray( 1, 2, 3, 4, 5, 6, 7).scan((x, y) -> x * y).subscribe(System.out::println);
    }
}
