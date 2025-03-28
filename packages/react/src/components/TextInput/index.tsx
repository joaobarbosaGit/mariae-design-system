import { ComponentProps, forwardRef, ComponentRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(({ prefix, ...props }: TextInputProps) => {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props} />
        </TextInputContainer>
    )
})

TextInput.displayName = 'TextInput'