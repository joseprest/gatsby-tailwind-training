import { useForm, ValidationError } from "@formspree/react";
import classNames from "classnames";
import React from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnqlepbq");
  return (
    <div className="max-w-md mx-auto">
      <form className="text-center contact-form" onSubmit={handleSubmit}>
        <select
          name="help"
          className="w-full p-3 mb-4 bg-white rounded h-14 focus:ring-orange focus:ring-2"
        >
          <option>-- How can I help you? --</option>
          <option value="1">General</option>
          <option value="2">Partnership</option>
          <option value="3">Content Corrections</option>
        </select>
        <ValidationError prefix="Help" field="help" errors={state.errors} />
        <input
          className="w-full p-3 mb-4 bg-white border rounded h-14 focus:ring-orange focus:ring-2"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <ValidationError
          prefix="Your Name"
          field="name"
          errors={state.errors}
        />
        <input
          className="w-full p-3 mb-4 bg-white rounded h-14 focus:ring-orange focus:ring-2"
          type="email"
          placeholder="E-mail Address"
          required
        />
        <ValidationError
          prefix="Email Address"
          field="email"
          errors={state.errors}
        />
        <textarea
          className="w-full h-40 p-3 mb-4 bg-white border rounded focus:ring-orange focus:ring-2"
          name="message"
          cols={30}
          rows={30}
          placeholder="Tell us more about your question or project"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className={classNames(
            "bg-orange rounded-md py-3 w-48 mx-auto text-white focus:ring-orange focus:ring-2 mb-4 relative",
            { "btn-loading": state.submitting }
          )}
          type="submit"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
      {state.succeeded ? (
        <p className="text-xl text-center">
          Thanks for submitting! We will contact with you soon.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
