import { useForm } from "react-hook-form";
import { Level, QueryInfo } from "../../../models/models";
import "./Form.css";

type FormProps = {
  gotIt: (QueryInfo: QueryInfo) => void | Promise<void>;
};

export function Form(props: FormProps) {
  const { register, handleSubmit, formState } = useForm<QueryInfo>();
  const { isSubmitting } = formState;

  async function send(queryInfo: QueryInfo) {
    await Promise.resolve(props.gotIt(queryInfo));
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(send)}>
        <label>Level: </label>
        <select defaultValue="" {...register("level")}>
          <option disabled value="">Chose Level...</option>
          <option value={Level.Junior}>{Level.Junior}</option>
          <option value={Level.Mid}>{Level.Mid}</option>
          <option value={Level.Senior}>{Level.Senior}</option>
        </select>

        <label>Company name: </label>
        <input type="text" placeholder="Company name..." {...register("company")} />

        <label>Job title: </label>
        <input type="text" placeholder="Job title..." {...register("jobTitle")} />

        <label>Number of questions: </label>
        <input type="number" placeholder="Number of questions..." min={1} max={10} {...register("questionCount")} />

        <button type="submit" data-loading={isSubmitting}>
          🚀
        </button>
      </form>
    </div>
  );
}
