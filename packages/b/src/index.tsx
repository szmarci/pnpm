import { useQuery } from "@tanstack/react-query";
import { FC } from 'react';

export const SubComponent: FC<any> = (props) => {
  const { data } = useQuery({});
  return (
    <div>{JSON.stringify(data)}</div>
  )
}