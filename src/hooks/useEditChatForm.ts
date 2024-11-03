import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IEditChatRequest } from "../interfaces-submodule/interfaces/dto/chat/dto/iedit-chat-request.interface";
import { editChatFormSchema } from "../schemas";

export const useEditChatForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEditChatRequest>({
    mode: "onSubmit",
    resolver: yupResolver(editChatFormSchema),
  });

  const onSubmit = (data: IEditChatRequest) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    setValue,
    errors,
  };
};
