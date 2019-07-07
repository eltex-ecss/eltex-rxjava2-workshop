package org.workshop.rxjava.step3;

public class TaskModel {

    private int id;
    private String name;
    private String description;
    private boolean isComplete;
    private boolean isVisible;


    public TaskModel(final int id, final String name, final String description, final boolean isComplete,
                     final boolean isVisible) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.isComplete = isComplete;
        this.isVisible = isVisible;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isComplete() {
        return isComplete;
    }

    public void setComplete(boolean complete) {
        isComplete = complete;
    }

    public boolean isVisible() {
        return isVisible;
    }

    public void setVisible(boolean visible) {
        isVisible = visible;
    }
}
