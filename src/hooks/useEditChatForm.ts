import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { chatFormSchema } from "../schemas";
import { IEditChatRequest } from "../interfaces-submodule/interfaces/dto/chat/dto/iedit-chat-request.interface";
import { IChatItem } from "../interfaces-submodule/interfaces/dto/chat/dto/ichat-item";

interface IUseEditChatFormProps {
  chat: IChatItem;
  toggleModal: () => void;
  onEdit: (id: number, data: IEditChatRequest) => void;
}

export const useEditChatForm = ({ chat, toggleModal, onEdit }: IUseEditChatFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEditChatRequest>({
    mode: "onSubmit",
    resolver: yupResolver(chatFormSchema),
  });

  const onSubmit = (data: IEditChatRequest) => {
    if (chat.name === data.name) {
      toggleModal();
      return;
    }

    onEdit(chat.id, data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    setValue,
    errors,
  };
};
