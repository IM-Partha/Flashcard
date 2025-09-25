import * as yup from 'yup'

// validation for input field 
export const signUpSchema = yup.object({
    Create_Group: yup
        .string()
        .min(5, "Group Name must be at least 5 characters")
        .max(50, "Group Name must be at most 50 characters")
        .required("Please Enter Group Name"),
        
    description: yup
        .string()
        .min(20, "Description must be at least 20 characters")
        .required("Please Enter Description"),
        
    term: yup.array(
        yup.object({
            Enter_Term: yup
                .string()
                .min(2, "Term must be at least 5 characters")
                .required("Please Enter Term"),
                
            Enter_Definition: yup
                .string()
                .min(10, "Definition must be at least 10 characters")
                .required("Please Enter Definition"),
        })
    ),
});
