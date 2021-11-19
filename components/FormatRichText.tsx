import { marked } from 'marked';
// import DOMPurify from 'dompurify'

interface FormatRichTextProps {
    textLimit?: number
    className?: string
}

const FormatRichText: React.FC<FormatRichTextProps> = ({ textLimit, className, children  }) => {

    const description = textLimit ? `${children?.substring(0, textLimit)}...` : children
    
    // const cleanedHTML = DOMPurify.sanitize(description)

    return ( 
        <div className={className}
            dangerouslySetInnerHTML={
                {
                __html: marked(description)
                }
            }
        />
     );
}

export default FormatRichText;