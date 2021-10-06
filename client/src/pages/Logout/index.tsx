import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

import styles from "./logout.module.scss";

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      swal({
        title: "Are you sure?",
        text: "Do you want to Logout from your DocuSign account ?",
        icon: "warning",
        buttons: ["Cancel", "Confirm"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          localStorage.clear();
          swal("Logged Out Successfully", {
            icon: "success",
          });
          history.replace("/");
        } else {
          swal("Logout cancelled !");
          history.replace("/agreement");
        }
      });
    } else {
      swal("Already Logged Out !");
      history.replace("/");
    }
  }, [history]);

  return (
    <div className={styles.logout}>
      <h2>Logging Out ...</h2>
    </div>
  );
};

export { Logout };
