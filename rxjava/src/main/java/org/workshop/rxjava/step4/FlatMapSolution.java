package org.workshop.rxjava.step4;

import io.reactivex.Observable;
import io.reactivex.ObservableSource;
import io.reactivex.functions.Function;

public class FlatMapSolution {

    static int i = 0;

    /**
     * Вызвать один поток данных c цифрами и подменить его другим потоком с цифрами
     * но в строковом представлении с прибавкой номера потока
     *
     * @param args
     */
    public static void main(String[] args) {
        Observable
                .fromArray(1, 2, 3)
                .flatMap((Function<Integer, ObservableSource<?>>) integer -> Observable.fromArray(
                        String.valueOf(integer), i++))
                .subscribe(System.out::println);
    }
}
