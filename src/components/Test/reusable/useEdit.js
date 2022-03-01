import { useState, useCallback, useMemo } from "react";

const useEdit = () => {
  const [status, setStatus] = useState(false);

  const editStatus = useCallback(() => {
    setStatus((prevStatus) => !prevStatus);
  }, []);

  const values = useMemo(
    () => ({
      status,
      editStatus,
    }),
    [status, editStatus]
  );
  return values;
};
export default useEdit;
