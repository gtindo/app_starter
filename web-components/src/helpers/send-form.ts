import Cookies from "js-cookie";

type SendFormParams = {
  action: string;
  enctype?: string;
  method?: "get" | "post";
  data: FormData
}

/**
 * Sends form data to a server
 * 
 * It creates a hidden form on the document, 
 * set datas on this form then call the method submit to send it the server 
 */
export function sendForm({action, data, enctype, method}: SendFormParams) {

  // Get Django csrf token from cookies
  const csrftoken = Cookies.get("csrftoken");
  const tokenFieldName = "csrfmiddlewaretoken";
  
  const form = document.createElement("form");
  form.action = action;
  form.method = method ?? "post";
  form.enctype = enctype ??  "application/x-www-form-urlencoded";
  form.setAttribute("style", "display: none");

  form.onformdata = (e) => {
      data.forEach((value, key) => {
          e.formData.append(key, value);
      });
      e.formData.append(tokenFieldName, `${csrftoken}`);
  }

  // The form needs to be attached to dom to work
  document.body.appendChild(form);

  form.submit();
}