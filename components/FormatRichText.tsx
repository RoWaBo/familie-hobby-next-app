import { marked } from "marked";
// import DOMPurify from 'dompurify'

interface FormatRichTextProps {
  textLimit?: number;
  className?: string;
}

const FormatRichText: React.FC<FormatRichTextProps> = ({
  textLimit,
  className,
  children,
}) => {

  let descriptionToString = children?.toString()

  descriptionToString = textLimit
    ? `${descriptionToString?.substring(0, textLimit)}...`
    : descriptionToString;

  return (
    <>
      {descriptionToString && (
        <div
          className={`${className} format-rich-text`}
          dangerouslySetInnerHTML={{
            __html: marked(descriptionToString),
          }}
        />
      )}
    </>
  );
};

export default FormatRichText;
