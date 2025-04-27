import styles from "../styles/Input.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  reference?: any;
  labelname?: string;
  marginleft?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, reference, labelname, marginleft, type, value, onChange }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      {labelname && <label className={styles.label}>{labelname}</label>}
      <input
        ref={reference}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className={`${styles.inputField} ${marginleft ? styles.marginLeft : ""}`}
      />
    </div>
  );
}
