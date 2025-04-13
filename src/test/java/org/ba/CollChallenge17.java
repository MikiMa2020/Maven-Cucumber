package org.ba;

import java.util.LinkedHashSet;
import java.util.Set;

//Description : Create a new LinkedHashSet with values and perform removeAll() function.
//Input : List = 10, 20, 30, 90, 10, 10, 40, 50
//Input : List = 10, 20, 60, 50, 40, 70, 80, 90
public interface CollChallenge17 {
	public static void main(String[] args) {
		Set<Integer> s1 = new LinkedHashSet<Integer>();
		s1.add(10);
		s1.add(20);
		s1.add(30);
		s1.add(90);
		s1.add(10);
		s1.add(10);
		s1.add(40);
		s1.add(50);
		System.out.println("The Set1 Values are "+s1);
		Set<Integer> s2 = new LinkedHashSet<Integer>();
		s2.add(10);
		s2.add(20);
		s2.add(60);
		s2.add(50);
		s2.add(40);
		s2.add(70);
		s2.add(80);
		s2.add(90);
		System.out.println("The Set2 Values are "+s2);
		s1.removeAll(s2);
		System.out.println("The Remove common Values of Two Sets: "+s1);
	}
}
