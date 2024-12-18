import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch } from "../hooks";
import { chatsApi } from "../services";
import { chatFormSchema } from "../schemas";
import { ICreateChatRequest } from "./../interfaces-submodule/interfaces/dto/chat/dto/icreate-chat-request.interface";
import { IEditChatRequest } from "../interfaces-submodule/interfaces/dto/chat/dto/iedit-chat-request.interface";

interface IUseCreateChatFormProps {
  toggleModal: () => void;
}

export const useCreateChatForm = ({ toggleModal }: IUseCreateChatFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEditChatRequest>({
    mode: "onSubmit",
    resolver: yupResolver(chatFormSchema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: ICreateChatRequest) => {
    try {
      const { id } = await dispatch(chatsApi.endpoints.createChat.initiate(data)).unwrap();
      navigate(`/chats/${id}`);
    } catch (error: any) {
      console.error("Failed to create a new chat");
    } finally {
      toggleModal();
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    setValue,
    errors,
  };
};
