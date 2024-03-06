import {StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod }) {

  const DUMMY_EXPENSES = [
    {
      id:"e1",
      description:"A pair of shoes",
      amount:59.99,
      date: new Date('2024-03-06'),
    },
    {
      id:"e2",
      description:"Keyboard",
      amount:70,
      date: new Date('2024-02-09'),
    },
    {
      id:"e3",
      description:"IPhone 15",
      amount:1000,
      date: new Date('2024-02-01'),
    },
    {
      id:"e4",
      description:"T-Shirt",
      amount:30.99,
      date: new Date('2024-02-01'),
    },
    {
      id:"e5",
      description:"Hamburger Meal",
      amount:10.99,
      date: new Date('2024-01-31'),
    },
  ]

  return (
    <View style = {styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;

const styles =  StyleSheet.create({
  container:{
    padding:24,
    backgroundColor:GlobalStyles.colors.primary700,
    flex:1
  }
})