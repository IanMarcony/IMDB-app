import styled from "styled-components/native";
import colors from "../../colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary_color};
`;

export const LogoImage = styled.Image`
  float: left;
`;

export const AreaLogin = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoginTextHeader = styled.Text`
  text-align: center;
  font-size: 14;
  //color: ${colors.header_color};
  //  font-family:'Proxima-Nova-Bold';
`;

export const InputLogin = styled.TextInput`
  width: 150;
  height: 50;
  border-radius: 4;
  border-width: 1;
  border-color: ${color.header_color};
`;

export const AreaButtonRegister = styled.TouchableOpacity`
  justify-content: left;
`;

export const TextButtonRegister = styled.Text`
  text-align: left;
  font-size: 12;
  //color: ${colors.accent_color};
  //font-family:'Proxima-Nova-Regular';
`;
