import Text from "./components/text";
import TrashIcon from './assets/icons/trash.svg?react';
import CheckIcon from './assets/icons/check.svg?react';
import PencilIcon from './assets/icons/pencil.svg?react';
import PlusIcon from './assets/icons/plus.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';
import Icon from "./components/icon";
import Badge from "./components/badge";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant={"body-md"}>
          Hello, world!
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base"/>
        <Icon svg={PencilIcon} className="fill-green-base"/>
        <Icon svg={CheckIcon} className="fill-green-base"/>
        <Icon svg={PlusIcon} className="fill-green-base"/>
        <Icon svg={SpinnerIcon} animate />
      </div>

      <div>
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>
    </div>
  )
}
