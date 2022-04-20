import React from "react";
import { Formik } from "formik";

const AppForm = ({ initialValues, validationSchema, onSubmit, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => (
                <>
                    <form
                        action="#"
                        method="POST"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(e);
                        }}
                    >
                        {children}
                    </form>
                </>
            )}
        </Formik>
    );
};

export default AppForm;
