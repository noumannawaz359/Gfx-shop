import React, { useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import styles from "../pages/report.module.css";
import Select from "react-select/creatable";
import { useForm, Controller } from "react-hook-form";
import FeedBack from "./feedback";
import Evidence from "./evidence";
import Produce from "./produce";
import Behave from "./behaviour";

function Report() {
  const [selectedOption, setSelectedOption] = useState({});

  const values = {
    project: "history",
    milestone: "new",
    feature: "next",
    bugType: "custom",
    BugSubtype: "syntax",
    severity: "interested",
    testingType: "a lot",
    testedVersion: "2.9",
    taskId: "39",
    developerName: "Nouman ",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const onSubmit = (data) => {
    console.log("submit", data);
  };

  useEffect(() => {
    Object.keys(values).map((value) => {
      const optionValue = values[value];
      setValue(value, { label: optionValue });
    });
  }, []);

  return (
    <>
      <h3 className={styles.heading}>Report a bug</h3>
      <hr className={styles.line}></hr>
      <form>
        <div className={styles.first}>
          <div className={styles.project}>
            <label htmlFor="project">Project</label>
            <Controller
              name="project"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <>
                  <Select
                    {...field}
                    className={styles.input}
                    options={options}
                  />
                  {errors.project && (
                    <p className={styles.error}>{errors.project.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div className={styles.milestone}>
            <label htmlFor="milestone">Milestone</label>
            <Controller
              name="milestone"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <>
                  <Select
                    {...field}
                    className={styles.input}
                    options={options}
                  />
                  {errors.milestone && (
                    <p className={styles.error}>{errors.milestone.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className={styles.feature}>
          <label htmlFor="feature">Feature</label>
          <Controller
            name="feature"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  className={styles.featureInput}
                  options={options}
                />
                {errors.feature && (
                  <p className={styles.error}>{errors.feature.message}</p>
                )}
              </>
            )}
          />
        </div>
        <label className={styles.feedback} htmlFor="feedback">
          Feedback
        </label>
        <Controller
          name="feedback"
          control={control}
          rules={{ required: "This field is required" }}
          render={() => (
            <>
              <FeedBack />
              {errors.feedback && (
                <p className={styles.componentError}>
                  {errors.feedback.message}
                </p>
              )}
            </>
          )}
        />
        <label className={styles.feedback} htmlFor="produce">
          Steps to reproduce
        </label>
        <Controller
          name="produce"
          control={control}
          rules={{ required: "This field is required" }}
          render={() => (
            <>
              <Produce />
              {errors.produce && (
                <p className={styles.componentError}>
                  {errors.produce.message}
                </p>
              )}
            </>
          )}
        />
        <label className={styles.feedback} htmlFor="behaviour">
          Ideal behaviour
        </label>
        <Controller
          name="behaviour"
          control={control}
          rules={{ required: "This field is required" }}
          render={() => (
            <>
              <Behave />
              {errors.behaviour && (
                <p className={styles.componentError}>
                  {errors.behaviour.message}
                </p>
              )}
            </>
          )}
        />
        <div className={styles.first}>
          <div className={styles.project}>
            <label htmlFor="bug type">Bug Type</label>
            <Controller
              name="bugType"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <>
                  <Select
                    {...field}
                    className={styles.input}
                    options={options}
                  />
                  {errors.bugType && (
                    <p className={styles.error}>{errors.bugType.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div className={styles.milestone}>
            <label htmlFor="bug subtype">Bug Subtype</label>
            <Controller
              name="BugSubtype"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <>
                  <Select
                    {...field}
                    className={styles.input}
                    options={options}
                  />
                  {errors.BugSubtype && (
                    <p className={styles.error}>{errors.BugSubtype.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className={styles.first}>
          <div className={styles.project}>
            <label htmlFor="Severity">Severity</label>
            <Controller
              name="severity"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <>
                  <Select
                    {...field}
                    className={styles.input}
                    options={options}
                  />
                  {errors.severity && (
                    <p className={styles.error}>{errors.severity.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div className={styles.milestone}>
            <label htmlFor="Testing Type">Testing Type</label>
            <Controller
              name="testingType"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <>
                  <Select
                    {...field}
                    className={styles.input}
                    options={options}
                  />
                  {errors.testingType && (
                    <p className={styles.error}>{errors.testingType.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className={styles.first}>
          <div className={styles.project}>
            <label htmlFor="Tested Version">Tested Version</label>
            <Controller
              name="testedVersion"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <>
                  <input className={styles.input} {...field} type="text" />
                  {errors.testedVersion && (
                    <p className={styles.error}>
                      {errors.testedVersion.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className={styles.milestone}>
            <label htmlFor="Task Id">Task Id</label>
            <Controller
              name="taskId"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <>
                  <input className={styles.input} {...field} type="text" />
                  {errors.taskId && (
                    <p className={styles.error}>{errors.taskId.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className={styles.feature}>
          <label htmlFor="Developer Name">Developer Name</label>
          <Controller
            name="developerName"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  className={styles.featureInput}
                  options={options}
                />
                {errors.developerName && (
                  <p className={styles.error}>{errors.developerName.message}</p>
                )}
              </>
            )}
          />
        </div>
        <Evidence />
        <div className={styles.last}>
          <button className={styles.discardButton} type="button">
            Discard
          </button>
          <input
            onClick={handleSubmit(onSubmit)}
            className={styles.submit}
            type="submit"
          />
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default Report;
