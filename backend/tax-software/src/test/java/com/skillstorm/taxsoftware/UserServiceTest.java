package com.skillstorm.taxsoftware;

import com.skillstorm.taxsoftware.model.User;
import com.skillstorm.taxsoftware.repository.UserRepository;
import com.skillstorm.taxsoftware.service.UserService;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Test
    public void createUser_whenUserIsValid_shouldReturnCreated() throws Exception {
        // GIVEN
        User user = new User();
        user.setFirstName("John");
        user.setLastName("Doe");

        when(userRepository.save(user)).thenReturn(user);

        // WHEN
        UserService userService = new UserService(userRepository);
        User createdUser = userService.createUser(user);

        // THEN
        assertNotNull(createdUser);
        assertEquals("John", createdUser.getFirstName());
        assertEquals("Doe", createdUser.getLastName());
    }

    @Test
    public void getAllUsers_whenThereAreUsers_shouldReturnListOfUsers() throws Exception {
        // GIVEN
        List<User> users = Arrays.asList(new User(), new User());
        when(userRepository.findAll()).thenReturn(users);

        // WHEN
        UserService userService = new UserService(userRepository);
        List<User> allUsers = userService.getAllUsers();

        // THEN
        assertNotNull(allUsers);
        assertEquals(2, allUsers.size());
    }

    @Test
    public void getUserById_whenUserExists_shouldReturnOptionalUser() throws Exception {
        // GIVEN
        String id = "1";
        User user = new User();
        user.setId(id);
        when(userRepository.findById(id)).thenReturn(Optional.of(user));

        // WHEN
        UserService userService = new UserService(userRepository);
        Optional<User> userById = userService.getUserById(id);

        // THEN
        assertNotNull(userById);
        assertTrue(userById.isPresent());
        assertEquals(user, userById.get());
    }

    @Test
    public void updateUser_whenUserExists_shouldReturnUpdatedUser() throws Exception {
        // GIVEN
        String id = "1";
        User user = new User();
        user.setId(id);
        when(userRepository.existsById(id)).thenReturn(true);
        when(userRepository.save(user)).thenReturn(user);

        // WHEN
        UserService userService = new UserService(userRepository);
        User updatedUser = userService.updateUser(user);

        // THEN
        assertNotNull(updatedUser);
        assertEquals(id, updatedUser.getId());
    }

        @Test
        public void deleteUser_whenUserExists_shouldDeleteUser() throws Exception {
        // GIVEN
        String id = "1";
        
        // WHEN
        UserService userService = new UserService(userRepository);
        userService.deleteUser(id);

        // THEN
        verify(userRepository, times(1)).deleteById(id);
    }

    @Test
    public void existsById_whenUserExists_shouldReturnTrue() throws Exception {
        // GIVEN
        String id = "1";
        when(userRepository.existsById(id)).thenReturn(true);

        // WHEN
        UserService userService = new UserService(userRepository);
        boolean existsById = userService.existsById(id);

        // THEN
        assertTrue(existsById);
    }
}
