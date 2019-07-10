package org.workshop.rxjava.step3;

import io.reactivex.Observable;

import java.util.*;

public class MapSolution {

    private List<TaskModel> getList() {
        final ArrayList<TaskModel> list = new ArrayList<>();

        list.add(new TaskModel(1, "test1", "Pass test with 80%", true, true));
        list.add(new TaskModel(2, "math", "Solve 30 tasks", false, true));
        list.add(new TaskModel(3, "Change work", "See different jobs", false, false));
        return list;
    }

    /**
     * Написать преобразование stream из TaskModel в TaskPayload, только тех заданий, у которых флаг isVisible true
     *
     * @param args
     */
    public static void main(String[] args) {
        final MapSolution clazz = new MapSolution();
        final List<TaskModel> list = clazz.getList();

        Observable.fromIterable(list).filter(TaskModel::isVisible).map(it -> {
            final String isComplete = it.isComplete() ? "true" : "false";
            return new TaskPayload(it.getName(), it.getDescription(), isComplete);
        }).subscribe(s -> {
            System.out.println("Name" + s.getName());
        });
    }
}
