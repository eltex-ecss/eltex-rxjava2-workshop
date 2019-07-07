package org.workshop.rxjava.step3;

public class TaskPayload {

    private String name;
    private String description;
    private String isComplete;

    public TaskPayload(String name, String description, String isComplete) {
        this.name = name;
        this.description = description;
        this.isComplete = isComplete;
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

    public String getIsComplete() {
        return isComplete;
    }

    public void setIsComplete(String isComplete) {
        this.isComplete = isComplete;
    }
}
