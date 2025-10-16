import { AppDispatcher } from "@/store/hooks";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useEffect, useState } from "react";
import { setConfigName } from "@/store/configSlice";

interface ConfigModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConfigModal({ isOpen, onOpenChange }: ConfigModalProps) {
  const [newName, setNewName] = useState("");
  const { useAppDispatch, useAppSelector } = AppDispatcher();
  const dispatch = useAppDispatch();
  const configName = useAppSelector((state) => state.config.name);

  useEffect(() => {
    if (isOpen) {
      setNewName(configName);
    }
  }, [configName, isOpen]);

  const handleSave = () => {
    dispatch(setConfigName(newName));
    onOpenChange(false);
    setNewName("");
  };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Config</DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            In this configuration modal you can configure the name of the
            portfolio in the home page.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 my-6">
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full py-2 px-4 border-none outline-none text-white bg-blue-500/20 rounded-md"
            autoFocus={true}
          />
        </div>
        <DialogFooter>
          <Button
            className="bg-blue-500 text-white font-bold w-1/4 hover:bg-blue-500/80"
            type="button"
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
