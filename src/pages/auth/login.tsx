import React, { useContext, useState } from "react";
import { Link, navigate } from "gatsby";
import * as Yup from "yup";
import AppForm from "../../components/AppForm";
import Button from "../../components/Button";
import Input from "../../components/Input";
import BlankLayout from "../../components/layouts/BlankLayout";
import Logo from "../../components/logo";
import { supabase } from "../../helpers/supabase";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/AuthContext";
import SEO from "../../components/layouts/SEO";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { getUser } = useContext(AuthContext);

  const handleSubmit = async ({ email, password }) => {
    setLoading(true);
    const { error } = await supabase.auth.signIn({ email, password });

    if (error) {
      swal(error.message, "", "error");
    } else {
      await getUser();
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <BlankLayout>
      <SEO
        title="Login | Timeflow Academy"
        url="https://timeflow.academy/auth/login"
        desc="Timeflow Academy is an online, hands-on platform for improving your Data Engineering skills using open source and cloud native platforms incluuding DBT, Clickhouse, Snowflake, Kafka, Spark and Airflow"
        ogImage="https://timeflow.academy/assets/img/home.png"
      />
      <div className="flex items-center justify-center w-full h-screen bg-grey-500">
        <div className="w-full max-w-lg md:bg-white md:shadow-4xl">
          <div className="absolute top-0 left-0 flex justify-center w-full py-5 border-b md:py-9 border-grey-600 md:relative md:top-auto md:left-auto">
            <Logo />
          </div>

          <div className="px-5 pt-12 md:p-20">
            <h2 className="mb-5 text-2xl text-center">Login</h2>

            <AppForm
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <div className="flex flex-col items-center space-y-8">
                <Input name="email" type="text" placeholder="Email address" />
                <Input name="password" type="password" placeholder="Password" />
                <Button loading={loading}>login</Button>
              </div>
            </AppForm>
            <div className="text-center mt-14">
              <p className="text-sm text-grey-lite">
                Don’t have an account?{" "}
                <Link to="/auth/register" className="text-orange">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlankLayout>
  );
};

export default LoginPage;
