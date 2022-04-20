import React, { useState } from "react";
import * as Yup from "yup";
import { Link, navigate } from "gatsby";
import Button from "../../components/Button";
import Input from "../../components/Input";
import BlankLayout from "../../components/layouts/BlankLayout";
import Logo from "../../components/logo";
import AppForm from "../../components/AppForm";
import { createUser } from "../../helpers/supabase";
import swal from "sweetalert";
import SEO from "../../components/layouts/SEO";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

const RegistrationPage = () => {
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ name, email, password }) => {
    setLoading(true);
    setServerError("");

    try {
      await createUser({ name, email, password });
      navigate("/auth/login");
      swal(
        "You have successfully registered!",
        "Confirm your email before login",
        "success"
      );
      setLoading(false);
    } catch (error) {
      setServerError(error.message);
      setLoading(false);
    }
  };

  return (
    <BlankLayout>
      <SEO
        title="Register | Timeflow Academy"
        url="https://timeflow.academy/auth/register"
        desc="Timeflow Academy is an online, hands-on platform for improving your Data Engineering skills using open source and cloud native platforms incluuding DBT, Clickhouse, Snowflake, Kafka, Spark and Airflow"
        ogImage="https://timeflow.academy/assets/img/home.png"
      />
      <div className="flex items-center justify-center w-full h-screen bg-grey-500">
        <div className="w-full max-w-lg md:bg-white md:shadow-4xl">
          <div className="absolute top-0 left-0 flex justify-center w-full py-5 border-b md:py-9 border-grey-600 md:relative md:top-auto md:left-auto">
            <Logo />
          </div>

          <div className="px-5 pt-12 md:p-20">
            <h2 className="mb-5 text-2xl text-center">Registration</h2>

            <AppForm
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {serverError && (
                <div className="py-5 text-center">
                  <p className="text-orange">{serverError}</p>
                </div>
              )}

              <div className="flex flex-col items-center space-y-8">
                <Input name="name" type="text" placeholder="Your name" />
                <Input name="email" type="text" placeholder="Email address" />
                <Input name="password" type="password" placeholder="Password" />
                <Button loading={loading}>Sign up</Button>
              </div>
            </AppForm>
            <div className="text-center mt-14">
              <p className="text-sm text-grey-lite">
                Already have an account?{" "}
                <Link to="/auth/login" className="text-orange">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlankLayout>
  );
};

export default RegistrationPage;
